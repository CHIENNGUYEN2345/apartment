@extends(config('core.admin_theme').'.template')
@section('main')
<script src="{{ url('libs/chartjs/js/Chart.bundle.js') }}"></script>
<script src="{{ url('libs/chartjs/js/utils.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


<?php
    if (\Auth::guard('admin')->user()->super_admin != 1) {
        //  Nếu ko phải super_admin thì truy vấn theo dữ liệu cty đó
        // $whereCompany = 'company_id = ' . \Auth::guard('admin')->user()->last_company_id;
        $whereCompany = '1 = 1';
    } else {
        $whereCompany = '1 = 1';
    }


    //  Mặc định lấy ngày đầu tháng
    $start_date = isset($_GET['start_date']) ? $_GET['start_date'] : date('Y-m-01 00:00:00');

    //  Mặc định lấy ngày hôm nay
    $end_date = isset($_GET['end_date']) ? $_GET['end_date'] : date('Y-m-d 23:59:00');

    $where = "created_at >= '" . $start_date . " 00:00:00' AND created_at <= '" . $end_date . " 23:59:59'";
    $whereRegistration = "registration_date >= '" . $start_date . " 00:00:00' AND registration_date <= '" . $end_date . " 23:59:59'";
    $whereCreated_at = "created_at >= '" . $start_date . " 00:00:00' AND created_at <= '" . $end_date . " 23:59:59'";
    $whereDate = "date >= '" . $start_date . " 00:00:00' AND date <= '" . $end_date . " 23:59:59'";


    if (isset($_GET['admin_id']) && $_GET['admin_id'] != '') {
        $where .= " AND admin_id = " . $_GET['admin_id'];
        $whereRegistration .= " AND admin_id = " . $_GET['admin_id'];
    }



    $tong_hd = @\App\CRMDV\Models\Bill::whereRaw($whereRegistration)->count();


    $tong_khach = @\App\CRMDV\Models\Bill::whereRaw($where)->select('id')->get()->count();


    $doanh_so = \App\CRMDV\Models\Bill::whereRaw($whereRegistration)->sum('total_price');


    $doanh_thu_du_an = \App\CRMDV\Models\Bill::whereRaw($whereRegistration)->sum('total_received');

    $phieu_thu = \App\CRMDV\Models\BillReceipts::where('price', '>', 0)->whereRaw($whereDate)->sum('price');

    $phieu_chi = \App\CRMDV\Models\BillReceipts::where('price', '<', 0)->whereRaw($whereDate)->sum('price');

    ?>
{{--    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">--}}
{{--        <div class="row">--}}
{{--            @if(in_array(CommonHelper::getRoleName(\Auth::guard('admin')->user()->id, 'name'), ['super_admin', ]))--}}
{{--                @include('CRMDV.dashboard.partials.bo_loc.bo_loc_chung')--}}
{{--            @endif--}}
{{--        </div>--}}
{{--        <div class="row">--}}
{{--            @include('CRMDV.timekeeper.partials.nut_diem_danh_theo_toa_do')--}}
{{--        </div>--}}
{{--    </div>--}}
<style>
.home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;

}

.home__li {
    width: 300px;
    height: 200px;
    margin-bottom: 50px;
    background-color: rgb(158, 158, 34);
    list-style-type: none;
    border-radius: 30px;
}

svg {
    width: 40px;
    height: 40px;
}

.home__li a {
    padding: auto;
}

.home__text {
    font-size: 1.45rem;
    font-family: Poppins, Helvetica, "sans-serif";
    font-weight: 500;
}

.home__li:first-child {
    background-color: #fff4de;
}

.home__li:first-child svg {
    fill: #c09134;
}

.home__li:first-child .home__text {
    color: #c09134;
}

.home__li:nth-child(2) {
    background-color: #e1f0ff;
}

.home__li:nth-child(2) svg {
    fill: #6cb3fa;
}

.home__li:nth-child(2) .home__text {
    color: #6cb3fa;
}

.home__li:nth-child(3) {
    background-color: #ffe2e5;
}

.home__li:nth-child(3) .home__text {
    color: #ff7d8a;
}

.home__li:nth-child(3) svg {
    fill: #ff7d8a;
}

.home__li:nth-child(4) {
    background-color: #c9f7f5;
}

.home__li:nth-child(4) svg {
    fill: #33cfc8;
}

.home__li:nth-child(4) .home__text {
    color: #33cfc8;
}

.home__li:nth-child(5) {
    background-color: #ffeed6;
}

.home__li:nth-child(5) svg {
    fill: #ec961d;
}

.home__li:nth-child(5) .home__text {
    color: #ec961d;
}

.home__li:nth-child(6) {
    background-color: #b7eed6;
}

.home__li:nth-child(6) svg {
    fill: #108351;
}

.home__li:nth-child(6) .home__text {
    color: #108351;
}

.home__li:nth-child(7) {
    background-color: #b7dad6;
}

.home__li:nth-child(7) svg {
    fill: #0cb6a2;
}

.home__li:nth-child(7) .home__text {
    color: #0cb6a2;
}

.home__li:nth-child(8) {
    background-color: #6b9608;
}

.home__li:nth-child(8) svg {
    fill: #9dd812;
}

.home__li:nth-child(8) .home__text {
    color: #9dd812;
}

.home__li:nth-child(9) {
    background-color: #fbbfff;
}

.home__li:nth-child(9) svg {
    fill: #df53e9;
}

.home__li:nth-child(9) .home__text {
    color: #df53e9;
}

.home__a {
    padding: 50px;
}

.home__svg,
.home__text {
    display: block;
}

a {
    text-decoration: none;
}

.home__a {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>
<ul class="home">
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/hradmin" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                    viewBox="0 0 640 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg></span>
            <span class="home__text">Thành viên</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/rooms" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                    viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M436 480h-20V24c0-13.3-10.7-24-24-24H56C42.7 0 32 10.7 32 24v456H12c-6.6 0-12 5.4-12 12v20h448v-20c0-6.6-5.4-12-12-12zM128 76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V76zm0 96c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm52 148h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm76 160h-64v-84c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84zm64-172c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" />
                </svg></span>
            <span class="home__text">Phòng ban</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/timekeeper/bao-cao" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                    viewBox="0 0 640 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
                </svg></span>
            <span class="home__text">Chấm công</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/codes" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                    viewBox="0 0 384 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" />
                </svg></span>
            <span class="home__text">Bảng hàng</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/bao_cao_dan_khach" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                    viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-228-32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" />
                </svg></span>
            <span class="home__text">Báo cáo dẫn khách</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/admin" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5"
                    viewBox="0 0 496 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8 .4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
                </svg></span>
            <span class="home__text">Tài khoản</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/role" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                    viewBox="0 0 640 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3 .7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3 .4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3 .2-6.5 .6-9.8 .6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg></span>
            <span class="home__text">Phân quyền</span>
        </a>
    </li>
    <li class="home__li">
        <a href="https://sehouse.khoweb.top/admin/setting" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                    viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4 .6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                </svg></span>
            <span class="home__text">Cấu hình chung</span>
        </a>
    </li>
    <li class="home__li">
        <a href="#" class="home__a">
            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                    viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" />
                </svg></span>
            <span class="home__text">Hệ thống</span>
        </a>
    </li>
</ul>

@endsection
@section('custom_head')
<style type="text/css">
.kt-datatable__cell>span>a.cate {
    color: #5867dd;
    margin-bottom: 3px;
    background: rgba(88, 103, 221, 0.1);
    height: auto;
    display: inline-block;
    width: auto;
    padding: 0.15rem 0.75rem;
    border-radius: 2px;
}

.paginate>ul.pagination>li {
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin: 0 5px;
    cursor: pointer;
}

.paginate>ul.pagination span {
    color: #000;
}

.paginate>ul.pagination>li.active {
    background: #0b57d5;
    color: #fff !important;
}

.paginate>ul.pagination>li.active span {
    color: #fff !important;
}

.kt-widget12__desc,
.kt-widget12__value {
    text-align: center;
}

@-webkit-keyframes chartjs-render-animation {
    from {
        opacity: 0.99 list_user
    }

    to {
        opacity: 1
    }
}

@keyframes chartjs-render-animation {
    from {
        opacity: 0.99
    }

    to {
        opacity: 1
    }
}

.chartjs-render-monitor {
    -webkit-animation: chartjs-render-animation 0.001s;
    animation: chartjs-render-animation 0.001s;
}

canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.text-red {
    color: red;
}
</style>
<style type="text/css">
@-webkit-keyframes chartjs-render-animation {
    from {
        opacity: 0.99
    }

    to {
        opacity: 1
    }
}

@keyframes chartjs-render-animation {
    from {
        opacity: 0.99
    }

    to {
        opacity: 1
    }
}

.chartjs-render-monitor {
    -webkit-animation: chartjs-render-animation 0.001s;
    animation: chartjs-render-animation 0.001s;
}

canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}


@media (max-width: 768px) {
    div#kt_datatable_latest_orders {
        overflow: auto;
    }

    table.kt-datatable__table {
        width: unset !important;
        display: inline-block !important;
    }

    .kt-widget12 .kt-widget12__content .thong_ke_so {
        display: inline-block;
    }

    .thong_ke_so .col-sm-3 {
        display: inline-block;
        width: 50%;
        float: left;
        padding: 0;
        margin-bottom: 20px;
    }
}

.thong_ke_so {
    display: inline-block !important;
    margin-bottom: 0 !important;
}

.thong_ke_so .kt-widget12__info {
    display: inline-block !important;
    min-width: 150px;
    margin-bottom: 2.5rem;
}

.font-vua {
    font-size: 12px !important;
}
</style>

@endsection
@push('scripts')


@endpush