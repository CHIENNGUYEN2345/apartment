@extends(config('core.admin_theme').'.template')
@section('main')
    <script src="{{ url('libs/chartjs/js/Chart.bundle.js') }}"></script>
    <script src="{{ url('libs/chartjs/js/utils.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <!-- CSS Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    {{--    Link font awesome 6.5.1 --}}
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    />

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
        .box {
            width: 90%;
            height: 180px;
            border-radius: 15px;
            padding: 16px;
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

        .box-content-icon {
            font-size: 2.45rem;
            color: #ffffff;
            margin: 0 0 16px 12px;
        }

        .fa-solid, .fa-gear {
            transition: transform 0.5s ease;
        }

        .fa-solid:hover {
            transform: rotateY(180deg);
        }

        .fa-gear:hover {
            transform: rotate(360deg);
        }
    </style>

    {{--    trang chu --}}
    <div class="container">
        <div class="row py-3">
            {{--            nut cham cong --}}
            <a
                    href=""
                    class="col-md-4 box"
                    style="background-color: #ffeed6"
            >
                <div class="box-content rounded position-relative">
                    <div class="content position-absolute">
                        <i
                                class="fa-solid fa-users box-content-icon"
                                style="color: #196e64"
                        ></i>
                        <div class="text-danger box-content-text">
                            <p style="color: #196e64">
                                @include('CRMDV.timekeeper.partials.nut_diem_danh_theo_toa_do')
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            {{--            end nut cham cong --}}

            {{--            nut thanh vien --}}
            {{--            @if(in_array('hradmin_view', $permissions))--}}
            {{--            <a--}}
            {{--                    href="/admin/hradmin"--}}
            {{--                    class="col-md-4 box"--}}
            {{--                    style="background-color: #b7dad6"--}}
            {{--            >--}}
            {{--                <div class="box-content rounded position-relative">--}}
            {{--                    <div class="content position-absolute">--}}
            {{--                        <i--}}
            {{--                                class="fa-solid fa-users box-content-icon"--}}
            {{--                                style="color: #c09134"--}}
            {{--                        ></i>--}}
            {{--                        <div class="text-danger box-content-text">--}}
            {{--                            <p style="color: #c09134">Thành viên</p>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            </a>--}}
            {{--            @endif--}}

            {{--            nut phong ban --}}
            @if(in_array('rooms_view', $permissions))
                <a
                        href="/admin/rooms"
                        class="col-md-4 box"
                        style="background-color: #e1f0ff"
                >
                    <div class="box-content rounded position-relative">
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
            @endif

            {{--            nut cham cong --}}
            <a
                    href="/admin/rooms"
                    class="col-md-4 box"
                    style="background-color: #ff7d8a"
            >
                <div class="box-content rounded position-relative">
                    <div class="content position-absolute">
                        <i
                                class="fa-solid fa-building box-content-icon"
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
            {{--            nut bang hang --}}
            @if(in_array('codes_view', $permissions))
                <a
                        href="/admin/codes"
                        class="col-md-4 box"
                        style="background-color: #c9f7f5"
                >
                    <div class="box-content rounded position-relative">
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
            @endif

            {{--            nut bao cao dan khach --}}
            @if(in_array('bao_cao_dan_khach_view', $permissions))
                <a
                        href="/admin/bao_cao_dan_khach"
                        class="col-md-4 box"
                        style="background-color: #ffeed6"
                >
                    <div class="box-content rounded position-relative">
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
            @endif

            {{--            nut tai khoan --}}
            @if(in_array('hradmin_view', $permissions))
                <a
                        href="/admin/admin"
                        class="col-md-4 box"
                        style="background-color: #b7eed6"
                >
                    <div class="box-content rounded position-relative">
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
            @endif
        </div>
        <div class="row py-3">
            {{--            nut phan quyen --}}
            @if(in_array('role_view', $permissions))
                <a
                        href="/admin/role"
                        class="col-md-4 box"
                        style="background-color: #b7dad6"
                >
                    <div class="box-content rounded position-relative">
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
            @endif

            {{--            nut setting --}}
            @if(in_array('setting', $permissions))
                <a
                        href="/admin/setting"
                        class="col-md-4 box"
                        style="background-color: #6b9608"
                >
                    <div class="box-content rounded position-relative">
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
            @endif

            {{--            nut he thong --}}
            {{--            @if(in_array('setting', $permissions))--}}
            {{--            <a href="" class="col-md-4 box" style="background-color: #fbbfff">--}}
            {{--                <div class="box-content rounded position-relative">--}}
            {{--                    <div class="content position-absolute">--}}
            {{--                        <i--}}
            {{--                                class="fa-solid fa-sliders box-content-icon"--}}
            {{--                                style="color: #ee00ff"--}}
            {{--                        ></i>--}}
            {{--                        <div class="text-danger box-content-text">--}}
            {{--                            <p style="color: #ee00ff">Hệ thống</p>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            </a>--}}
            {{--            @endif--}}
        </div>
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
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

@endpush