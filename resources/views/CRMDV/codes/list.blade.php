@extends(config('core.admin_theme').'.template')
@section('main')

    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

        <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
			<span class="kt-portlet__head-icon">
                <i class="kt-font-brand flaticon-calendar-with-a-clock-time-tools"></i>
			</span>
                    <h3 class="kt-portlet__head-title">
                        {{ $module['label'] }}
                    </h3>
                </div>
                <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper">
                        <div class="">
                            <input type="text" name="quick_search" value="{{ @$_GET['quick_search'] }}"
                                   class="form-control" title="Chỉ cần enter để thực hiện tìm kiếm"
                                   placeholder="Tìm kiếm nhanh">
                        </div>
                        <div class="kt-portlet__head-actions">
                            <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle btn-closed-search"
                                    onclick="$('.form-search').slideToggle(100); $('.kt-portlet-search').toggleClass('no-padding');">
                                <i class="la la-search"></i> Tìm kiếm
                            </button>
                            <div class="dropdown dropdown-inline">
                                <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="la la-download"></i> Hành động
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                                     style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(114px, 38px, 0px);">
                                    <ul class="kt-nav">
                                        <li class="kt-nav__section kt-nav__section--first">
                                            <span class="kt-nav__section-text">Chọn hành động</span>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a class="kt-nav__link export-excel"
                                               title="Xuất các bản ghi đang lọc ra file excel"
                                               onclick="$('input[name=export]').click();">
                                                <i class="kt-nav__link-icon la la-file-excel-o"></i>
                                                <span class="kt-nav__link-text">Xuất Excel</span>
                                            </a>
                                        </li>
                                        @if(in_array($module['code'] . '_delete', $permissions))
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link" onclick="multiDelete();"
                                                   title="Xóa tất cả các dòng đang được tích chọn">
                                                    <i class="kt-nav__link-icon la la-copy"></i>
                                                    <span class="kt-nav__link-text">Xóa nhiều</span>
                                                </a>
                                            </li>
                                        @endif
                                    </ul>
                                </div>
                            </div>
                                <a href="{{ url('/admin/'.$module['code'].'/add/') }}"
                                   class="btn btn-brand btn-elevate btn-icon-sm">
                                    <i class="la la-plus"></i>
                                    Tạo mới
                                </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="kt-portlet__body kt-portlet-search @if(!isset($_GET['search'])) no-padding @endif">
                <!--begin: Search Form -->
                <form class="kt-form kt-form--fit kt-margin-b-20 form-search" id="form-search" method="GET" action=""
                      @if(!isset($_GET['search'])) style="display: none;" @endif>
                    <input name="search" type="hidden" value="true">
                    <input name="limit" type="hidden" value="{{ $limit }}"><input type="hidden" name="quick_search"
                                                                                  value="{{ @$_GET['quick_search'] }}"
                                                                                  id="quick_search_hidden"
                                                                                  class="form-control"
                                                                                  placeholder="Tìm kiếm nhanh">
                    <div class="row">

                        @foreach($filter as $filter_name => $field)
                            <div class="col-sm-6 col-lg-3 kt-margin-b-10-tablet-and-mobile list-filter-item">
                                <label>{{ @$field['label'] }}:</label>
                                @include(config('core.admin_theme').'.list.filter.' . $field['type'], ['name' => $filter_name, 'field'  => $field])
                            </div>
                        @endforeach
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <button class="btn btn-primary btn-brand--icon" id="kt_search" type="submit">
						<span>
							<i class="la la-search"></i>
							<span>Lọc</span>
						</span>
                            </button>
                            &nbsp;&nbsp;
                            <a class="btn btn-secondary btn-secondary--icon" id="kt_reset" title="Xóa bỏ bộ lọc"
                               href="/admin/{{ $module['code'] }}">
						<span>
							<i class="la la-close"></i>
							<span>Reset</span>
						</span>
                            </a>
                        </div>
                    </div>
                    <input name="export" type="submit" value="export" style="display: none;">
                    @foreach($module['list'] as $k => $field)
                        <input name="sorts[]" value="{{ @$_GET['sorts'][$k] }}"
                               class="sort sort-{{ $field['name'] }}" type="hidden">
                    @endforeach
                </form>
                <!--end: Search Form -->
            </div>
            <div class="kt-separator kt-separator--md kt-separator--dashed" style="margin: 0;"></div>
            <div class="kt-portlet__body kt-portlet__body--fit">
                <!--begin: Datatable -->
                <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--scroll kt-datatable--loaded"
                     id="scrolling_vertical" style="">
                    <table class="table table-striped">
                        <thead class="kt-datatable__head">
                        <tr class="kt-datatable__row" style="left: 0px;">
                            <th style="display: none;"></th>
                            <th data-field="id"
                                class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"><span
                                        style="width: 20px;"><label
                                            class="kt-checkbox kt-checkbox--single kt-checkbox--all kt-checkbox--solid"><input
                                                type="checkbox"
                                                class="checkbox-master">&nbsp;<span></span></label></span></th>

                            @php $count_sort = 0; @endphp
                            @foreach($module['list'] as $field)
                                <th data-field="{{ $field['name'] }}"
                                    class="kt-datatable__cell kt-datatable__cell--sort {{ @$_GET['sorts'][$count_sort] != '' ? 'kt-datatable__cell--sorted' : '' }}"
                                    @if(isset($field['sort']))
                                    onclick="sort('{{ $field['name'] }}')"
                                        @endif
                                >
                                    {{ $field['label'] }}
                                    @if(isset($field['sort']))
                                        @if(@$_GET['sorts'][$count_sort] == $field['name'].'|asc')
                                            <i class="flaticon2-arrow-up"></i>
                                        @else
                                            <i class="flaticon2-arrow-down"></i>
                                        @endif
                                    @endif

                                </th>
                                @php $count_sort++; @endphp
                            @endforeach
                        </tr>
                        </thead>
                        <tbody class="kt-datatable__body ps ps--active-y" style="max-height: 496px;">
                        @foreach($listItem as $item)
                            <tr data-row="{{ $item->id }}" class="kt-datatable__row  row_id{{ $item->id }}" style="left: 0px;">
                                <td style="display: none;"
                                    class="id id-{{ $item->id }}">{{ $item->id }}</td>
                                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                                    data-field="ID"><span style="width: 20px;"><label
                                                class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input
                                                    name="id[]"
                                                    type="checkbox" class="ids"
                                                    value="{{ $item->id }}">&nbsp;<span></span></label></span>
                                </td>

                                @foreach($module['list'] as $field)
                                    <td data-field="{{ @$field['name'] }}"
                                        class="kt-datatable__cell item-{{ @$field['name'] }}">
                                        @if($field['type'] == 'custom')
                                            @include($field['td'], ['field' => $field])
                                        @else
                                            @include(config('core.admin_theme').'.list.td.'.$field['type'])
                                        @endif
                                    </td>
                                @endforeach
                            </tr>
                        @endforeach
                        <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                        </div>
                        <div class="ps__rail-y" style="top: 0px; height: 496px; right: 0px;">
                            <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 207px;"></div>
                        </div>
                        </tbody>
                    </table>
                    <div class="kt-datatable__pager kt-datatable--paging-loaded">
                        {!! $listItem->appends(isset($param_url) ? $param_url : '')->links() != '' ? $listItem->appends(isset($param_url) ? $param_url : '')->links() : '<ul class="pagination page-numbers nav-pagination links text-center"></ul>' !!}
                        <div class="kt-datatable__pager-info">
                            <div class="dropdown bootstrap-select kt-datatable__pager-size"
                                 style="width: 60px;">
                                <select class="selectpicker kt-datatable__pager-size select-page-size"
                                        onchange="$('input[name=limit]').val($(this).val());$('#form-search').submit();"
                                        title="Chọn số bản ghi hiển thị" data-width="60px"
                                        data-selected="20" tabindex="-98">
                                    <option value="20" {{ $limit == 20 ? 'selected' : '' }}>20</option>
                                    <option value="30" {{ $limit == 30 ? 'selected' : '' }}>30</option>
                                    <option value="50" {{ $limit == 50 ? 'selected' : '' }}>50</option>
                                    <option value="100" {{ $limit == 100 ? 'selected' : '' }}>100</option>
                                </select>
                            </div>
                            <span class="kt-datatable__pager-detail">Hiển thị {{ (($page - 1) * $limit) + 1 }} - {{ ($page * $limit) < $record_total ? ($page * $limit) : $record_total }} của {{ @number_format($record_total) }}</span>
                        </div>
                    </div>
                </div>
                <!--end: Datatable -->
            </div>
        </div>
    </div>


    <div class="modal fade modal-view-code" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="width: 1200px; margin-left: -200px">
                <div class="modal-header">
                    <h4 class="modal-title">Xem bảng hàng</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <a id="bao-cao-dan-khach" href="#" style="color: red;">Báo cáo dẫn khách</a>
                                <div class="card-header">
                                    <h4>Thông tin cơ bản</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Loại Hình: <span class="loai_hinh"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Loại Nhà Đất: <span class="loai_nha_dat"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Dự án: <span class="du_an"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Địa chỉ: <span class="address"></span></div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Diện tích: <span class="dien_tich"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Mặt tiền: <span class="mat_tien"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Số tầng: <span class="so_tang"></span></div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Phí môi giới: <span class="phi_moi_gioi"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Toà: <span class="toa"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>Tầng: <span class="tang"></span></div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Khoảng tầng: <span class="khoang_tang"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <div>
                                                    Số phòng ngủ: <span class="so_phong_ngu"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Giá bán niêm yết: <span class="price_setup"></span></div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Giá hạ chào: <span class="gia_ha_chao"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><div class="">Mô tả</div>
                                        <div class="content"></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4>Thông tin liên hệ</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Họ tên chủ sở hữu</div>
                                                <div class="intro"></div>
                                            </div>
                                            <div class="mb-3">
                                                <div>Số điện thoại</div>
                                                <div class="sdt_chu_nha"></div>
                                            </div>
                                            <div class="mb-3">
                                                <div>Số giấy chứng nhận</div>
                                                <div class="so_giay_chung_nhan"></div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Địa chỉ</div>
                                                <div class="dia_chi_tren_so"></div>
                                            </div>
                                            <div class="mb-3">
                                                <div></div>
                                                <div class="addressk"></div>
                                            </div>
                                            <div class="mb-3">
                                                <div>Số Seri</div>
                                                <div class="seri"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Ảnh</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Ảnh đại diện</div>
                                                <div class="">
                                                    <img src="" alt="" class="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="mb-3">
                                                <div>Ảnh khác</div>
                                                <div class="image_extra"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('custom_head')
    <link type="text/css" rel="stylesheet" charset="UTF-8"
          href="{{ asset(config('core.admin_asset').'/css/list.css') }}">
    {{--    <link type="text/css" rel="stylesheet" charset="UTF-8" href="{{ asset('Modules\WebService\Resources\assets\css\custom.css') }}">--}}
    {{--    <script src="{{asset('Modules\WebService\Resources\assets\js\custom.js')}}"></script>--}}
@endsection
@section('custom_footer')
    <script src="{{ asset(config('core.admin_asset').'/js/pages/crud/metronic-datatable/advanced/vertical.js') }}"
            type="text/javascript"></script>
    <script src="{{ asset(config('core.admin_asset').'/js/list.js') }}"></script>
    @include(config('core.admin_theme').'.partials.js_common')
@endsection
@push('scripts')
    @include(config('core.admin_theme').'.partials.js_common_list')
    <script>
        $(document).ready(function (){
           $('.btn-view').click(function (){
               var id = $(this).data('id');
               var luot_xem = $('[data-row="' + id + '"][data-field="luot_xem"]');
                $.ajax({
                     url: '/admin/codes/ajax-get-info/' + id,
                     type: 'GET',
                     success: function (res){
                         var response = res.data;ư
                         // console.log(res.service);
                         $('.modal-view-code').modal('show');
                         $('.loai_hinh').html(response.loai_hinh);
                         $('.loai_nha_dat').html(response.loai_nha_dat);
                         $('.du_an').html(res.service);
                         $('#bao-cao-dan-khach').attr('href', '/admin/bao_cao_dan_khach/add?code_id=' + response.id);
                        if(response.image == null){
                            $('.image').attr('src', 'https://sehouse.khoweb.top/filemanager/userfiles/_thumbs/se-house-logo-100x.jpg');
                        }else{
                            $('.image').attr('src', response.image);
                        }

                        if(response.image_extra == null){
                            $('.image_extra').html('<img src="https://sehouse.khoweb.top/filemanager/userfiles/_thumbs/se-house-logo-100x.jpg" alt="" class="image_extra" style="width: 100px;height: 100px;">');
                        }else{
                            var image_extra = response.image_extra.split('|');
                            var html = '';
                            for(var i = 0; i < image_extra.length; i++){
                                html += '<img src="https://sehouse.khoweb.top/filemanager/userfiles/'+ image_extra[i] +'" alt="" class="image_extra" style="width: 100px;height: 100px;">';
                            }
                            $('.image_extra').html(html);
                        }
                        $('.address').html(response.address);
                        $('.intro').html(response.intro);
                        $('.sdt_chu_nha').html(response.sdt_chu_nha);
                        $('.so_giay_chung_nhan').html(response.so_giay_chung_nhan);
                         $('.row_id'+response.id+' .item-luot_xem').html(response.luot_xem);
                         $('.gia_ha_chao').html(response.gia_ha_chao);
                         $('.price_setup').html(response.gia_niem_yet);
                         $('.dien_tich').html(response.dien_tich);
                         $('.mat_tien').html(response.mat_tien);
                         $('.so_tang').html(response.so_tang);
                         $('.phi_moi_gioi').html(response.phi_moi_gioi);
                         $('.toa').html(response.toa);
                         $('.tang').html(response.tang);
                         $('.khoang_tang').html(response.khoang_tang);
                         $('.so_phong_ngu').html(response.so_phong_ngu);
                         $('.content').html(response.content);
                         $('.dia_chi_tren_so').html(response.dia_chi_tren_so);



                     }
                });
           });
        });
    </script>
@endpush
