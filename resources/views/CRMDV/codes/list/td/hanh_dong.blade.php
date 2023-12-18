@if(in_array($module['code'] . '_edit', $permissions) || in_array('super_admin', $permissions))
<span class="edit"><a
            href="{{ url('/admin/'.$module['code'].'/edit/' . $item->id) }}"
            title="Sửa bản ghi này">{{trans('admin.edit')}}</a> | </span>
@endif
{{--    <span class=""><a--}}
{{--                href="{{ url('/admin/'.$module['code'].'/' . $item->id . '/duplicate') }}"--}}
{{--                title="Nhân bản bản ghi này">Nhân bản</a> | </span>--}}
@if(in_array($module['code'] . '_delete', $permissions) || in_array('super_admin', $permissions))
    <span class="trash"><a class="delete-warning"
                           href="{{ url('/admin/'.$module['code'].'/delete/' . $item->id) }}"
                           title="Xóa bản ghi">{{trans('admin.delete')}}</a> | </span>
@endif
@if(in_array('bao_cao_dan_khach_add', $permissions) || in_array('super_admin', $permissions))
<a href="/admin/bao_cao_dan_khach/add?code_id={{ $item->id }}" style="padding: 5px; border: 1px solid #ccc;">Báo cáo dẫn khách</a>
@endif