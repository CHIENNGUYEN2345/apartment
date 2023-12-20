@if($item->{$field['name']} >= 1000000000)
    <span style="width: 100%;display: inline-block;text-align: right; {{ $item->{$field['name']} < 0 ? 'color:red;' : '' }}">{{number_format($item->{$field['name']} / 1000000000, 1, '.', ',') . ' tỷ'}}</span>

@elseif($item->{$field['name']} >= 1000000)
    <span style="width: 100%;display: inline-block;text-align: right; {{ $item->{$field['name']} < 0 ? 'color:red;' : '' }}">{{ number_format($item->{$field['name']} / 1000000, 1, '.', ',') . ' tr' }}</span>
@else
    <span style="width: 100%;display: inline-block;text-align: right; {{ $item->{$field['name']} < 0 ? 'color:red;' : '' }}">{{ number_format($item->{$field['name']}, 0, '.', '.') }}<sup>đ</sup></span>
@endif

