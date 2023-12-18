@extends(config('core.admin_theme').'.template')
@section('main')
    <script src="{{ url('libs/chartjs/js/Chart.bundle.js') }}"></script>
    <script src="{{ url('libs/chartjs/js/utils.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <!-- CSS Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

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
    .home__li {
        width: 300px;
        height: 200px;
        margin-bottom: 50px;
        background-color: rgb(158, 158, 34);
        list-style-type: none;
    }

    svg {
        width: 40px;
        height: 40px;
    }

    .content {
        position: absolute;
        top: 40px;
        left: 40px;
    }

    .box-content-text {
        font-size: 28px;
        font-family: Poppins, Helvetica, "sans-serif";
        font-weight: 500;
    }

<<<<<<< HEAD
        .home__li0 {
            background-color: #e1f0ff;
        }

        .home__li0 svg {
            fill: #6cb3fa;
        }

        .home__li0 .home__text {
            color: #6cb3fa;
        }

        .home__li1 {
            background-color: #fff4de;
        }

        .home__li1 svg {
            fill: #c09134;
        }

        .home__li1 .home__text {
            color: #c09134;
        }

        .home__li2 {
            background-color: #e1f0ff;
        }

        .home__li2 svg {
            fill: #6cb3fa;
        }

        .home__li2 .home__text {
            color: #6cb3fa;
        }

        .home__li3 {
            background-color: #ffe2e5;
        }

        .home__li3 .home__text {
            color: #ff7d8a;
        }

        .home__li3 svg {
            fill: #ff7d8a;
        }

        .home__li4 {
            background-color: #c9f7f5;
        }

        .home__li4 svg {
            fill: #33cfc8;
        }

        .home__li4 .home__text {
            color: #33cfc8;
        }

        .home__li5 {
            background-color: #ffeed6;
        }

        .home__li5 svg {
            fill: #ec961d;
        }

        .home__li5 .home__text {
            color: #ec961d;
        }

        .home__li6 {
            background-color: #b7eed6;
        }

        .home__li6 svg {
            fill: #108351;
        }

        .home__li6 .home__text {
            color: #108351;
        }

        .home__li7 {
            background-color: #b7dad6;
        }

        .home__li7 svg {
            fill: #0cb6a2;
        }

        .home__li7 .home__text {
            color: #0cb6a2;
        }
        .home__a {
            padding: 30px;
        }

        .home__svg, .home__text {
            display: block;
        }

        a {
            text-decoration: none !important;
        }

        .home__a {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .home__svg svg {
            transition: transform 1s ease; /* Thời gian và kiểu chuyển đổi */
        }

        .home__svg__setting svg {
            transition: transform 1s ease; /* Thời gian và kiểu chuyển đổi */
        }

        .home__svg:hover svg {
            transform: rotateY(180deg);
        }

        .home__svg__setting:hover svg{
            transform: rotate(360deg);
        }
    </style>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <!-- 3 thẻ li cột đầu -->
                    <li class="list-group-item home__li0">
                        @include('CRMDV.timekeeper.partials.nut_diem_danh_theo_toa_do')
                    </li>

                    <li class="list-group-item home__li1">
                        <a href="/admin/timekeeper" class="home__a">
                            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                                                         viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                    <path
                                            d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
                                </svg></span>
                            <span class="home__text">Chấm công</span>
                        </a>
                    </li>

                    @if(in_array('rooms_view', $permissions))
                        <li class="list-group-item home__li2">
                            <a href="/admin/rooms" class="home__a">
                            <span class="home__svg"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                                         viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                    <path
                                            d="M436 480h-20V24c0-13.3-10.7-24-24-24H56C42.7 0 32 10.7 32 24v456H12c-6.6 0-12 5.4-12 12v20h448v-20c0-6.6-5.4-12-12-12zM128 76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V76zm0 96c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm52 148h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm76 160h-64v-84c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84zm64-172c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" />
                                </svg></span>
                                <span class="home__text">Phòng ban</span>
                            </a>
                        </li>
                    @endif

                </ul>
=======
    .box-content-icon {
        font-size: 2.45rem;
        color: #ffffff;
        margin: 0 0 16px 12px;
    }
</style>
<div class="container">
    <div class="row py-3">
        <a href="https://sehouse.khoweb.top/admin/hradmin" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #fff4de"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-users box-content-icon"
                            style="color: #c09134"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #c09134">Thành viên</p>
                    </div>
                </div>
>>>>>>> f80b3ec79e97b6e705dded8a7dee40202db8ea2a
            </div>
        </a>
        <a href="https://sehouse.khoweb.top/admin/rooms" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #e1f0ff"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-building box-content-icon"
                            style="color: #f067fa"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #f067fa">Phòng ban</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://sehouse.khoweb.top/admin/timekeeper/bao-cao" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #ff7d8a"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-user-clock box-content-icon"
                            style="color: #ffffff"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #ffffff">Chấm công</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="row py-3">
        <a href="https://sehouse.khoweb.top/admin/codes" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #c9f7f5"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-clipboard-list box-content-icon"
                            style="color: #33cfc8"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #33cfc8">Bảng hàng</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://sehouse.khoweb.top/admin/bao_cao_dan_khach" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #ffeed6"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-address-book box-content-icon"
                            style="color: #ec961d"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #ec961d">Báo cáo dẫn khách</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://sehouse.khoweb.top/admin/admin" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #b7eed6"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-user box-content-icon"
                            style="color: #108351"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #108351">Tài khoản</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="row py-3">
        <a href="https://sehouse.khoweb.top/admin/role" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #b7dad6"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-users-gear box-content-icon"
                            style="color: #196e64"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #196e64">Phân quyền</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://sehouse.khoweb.top/admin/setting" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #6b9608"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-gear box-content-icon"
                            style="color: #e6ffac"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #e6ffac">Cấu hình chung</p>
                    </div>
                </div>
            </div>
        </a>
        <a href="" class="col-md-4 box">
            <div
                    class="box-content rounded position-relative"
                    style="background-color: #fbbfff"
            >
                <div class="content position-absolute">
                    <i
                            class="fa-solid fa-sliders box-content-icon"
                            style="color: #ee00ff"
                    ></i>
                    <div class="text-danger box-content-text">
                        <p style="color: #ee00ff">Hệ thống</p>
                    </div>
                </div>
            </div>
        </a>
    </div>

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