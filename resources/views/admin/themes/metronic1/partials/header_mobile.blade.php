<div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed ">
    <div class="kt-header-mobile__logo">
        <a href="/admin/dashboard">
            <img alt="{{ @$settings['name'] }}" class="lazy" data-src="{{ \App\Http\Helpers\CommonHelper::getUrlImageThumb(@\Auth::guard('admin')->user()->image,35,null) }}" style="max-width:30px; max-height: 30px;">
        </a>
    </div>
    <div class="kt-header-mobile__toolbar">
        <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>
        <button class="kt-header-mobile__toggler kt-header-mobile__toggler--left" id="kt_aside_mobile_toggler"><span></span></button>
    </div>
</div>