<?php
    $diem_danh = \App\CRMDV\Models\Timekeeper::where('may_cham_cong_id', \Auth::guard('admin')->user()->may_cham_cong_id)->where('time', '>', date('Y-m-d 00:01:00'))->count();
?>

<style>
    .diem-danh-button{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    svg{
        fill: #6cb3fa;
    }
</style>

<div class="diem-danh-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"/></svg>
    <button class="btn btn-primary" id="nut-diem-danh" disabled href="/diem-danh?admin_id={{ \Auth::guard('admin')->user()->id }}">Điểm danh hôm nay</button>
</div>

<p style="width: 100%;" id="vi_tri_nv_so_voi_vp"></p>
@if($diem_danh > 0)
    <p style="width: 100%;">Đã điểm danh</p>
@endif


@if($diem_danh == 0)
<script>
    $('#nut-diem-danh').click(function () {
        window.location.href = $('#nut-diem-danh').attr('href');
    });

    function getLocation() {
        console.log("bắt đầu định vị nhân viên");
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(kiemTraHienThiNutChamCong);
        } else {
            $('#vi_tri_nv_so_voi_vp').html("Định vị địa lý không được hỗ trợ bởi trình duyệt này.");
        }
    }
    getLocation();


    function kiemTraHienThiNutChamCong(position) {
        console.log("nv_lat: " + position.coords.latitude);
        console.log("nv_long: " + position.coords.longitude);
        const nv_lat = position.coords.latitude;
        const nv_long = position.coords.longitude;


        <?php $vp_location = \App\Models\Setting::where('type', 'cham_cong_tab')->pluck('value', 'name')->toArray();?>
        const vp_lat = {{ @$vp_location['vp_lat'] }}; // Latitude of position 2
        const vp_long = {{ @$vp_location['vp_long'] }}; // Longitude of position 2

        const distance = calculateHaversine(nv_lat, nv_long, vp_lat, vp_long);
        $('#vi_tri_nv_so_voi_vp').html('Bạn cách văn phòng '+ (distance.toFixed(2) * 1000 ) +' mét');
        console.log(`Bạn cách văn phòng: ${distance.toFixed(2) * 1000} mét`);

        if (distance.toFixed(2) * 1000 < {{ @$vp_location['cham_cong_xa_toi_da'] }}) {
            //  nếu trong phạm vi thì cho chấm công
            $('#nut-diem-danh').removeAttr('disabled');
        }
    }


    //  Tính khoảng cách giữa văn phòng công ty và vị trí đang đứng
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    function calculateHaversine(lat1, lon1, lat2, lon2) {
        // Convert latitude and longitude from degrees to radians
        lat1 = toRadians(lat1);
        lon1 = toRadians(lon1);
        lat2 = toRadians(lat2);
        lon2 = toRadians(lon2);

        // Haversine formula
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;

        const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Radius of the Earth in kilometers (you can use 3959 for miles)
        const radius = 6371;

        // Calculate the distance
        const distance = radius * c;

        return distance;
    }



</script>
@endif