{{--@if (!in_array(CommonHelper::getRoleName(\Auth::guard('admin')->user()->id, 'name'), ['cvkd_parttime']))--}}
    <button class="text-dark bg-white font-bold border-0 outlight-0 btn-view"
            data-id="{{ $item->id }}"
    >{!! $item->{$field['name']} !!}</button>
{{--@endif--}}