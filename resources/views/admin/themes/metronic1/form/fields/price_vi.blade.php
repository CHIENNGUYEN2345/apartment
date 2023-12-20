<div class="input-group">

    <input type="text" name="{{ @$field['name'] }}" class="form-control {{ @$field['class'] }}"
           id="{{ $field['name'] }}" {!! @$field['inner'] !!}

           @if(isset($field['value']) && $field['value'] != '') style="display: none;" @endif

           value="{{ old($field['name']) != null ? old($field['name']) : @$field['value'] }}"
            {{ strpos(@$field['class'], 'require') !== false ? 'required' : '' }}
    >
    <div class="input-group-append"
         @if(isset($field['value']) && $field['value'] != '') style="display: none;" @endif
    >
        <span class="input-group-text">đ</span>
    </div>
    <p id="input-{{ $field['name'] }}" style="color: #000; margin: 0;">
        {!! old($field['name']) != null ? nl2br(old($field['name'])) : nl2br(number_format(@$field['value'], 0, '.', '.')) !!}
        <sup>đ</sup>
    </p>
    <script>
        $(document).ready(function () {
            $('input#{{ $field['name'] }}').on('input', function () {
                var inputValue = parseFloat($(this).val().replace(/,/g, ''));

                if (!isNaN(inputValue)) {
                    if (inputValue >= 1000000000) {
                        $('#input-{{ $field['name'] }}').text((inputValue / 1000000000).toFixed(1) + ' tỷ');
                    } else if (inputValue >= 1000000) {
                        $('#input-{{ $field['name'] }}').text((inputValue / 1000000).toFixed(1) + ' triệu');
                    } else {
                        $('#input-{{ $field['name'] }}').text(number_format(inputValue, 0, '.', ',') + ' đ');
                    }
                }
            });
        });
    </script>
</div>

<script>
    function number_format(number, decimals, dec_point, thousands_sep) {
        number = number.toFixed(decimals);
        var nstr = number.toString();
        nstr += '';
        x = nstr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? dec_point + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');
        }
        return x1 + x2;
    }
</script>
