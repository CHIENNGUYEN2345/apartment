<?php
$cat_ids = explode('|', $item->{$field['name']});
$data = \Modules\EduMarketing\Models\Tag::whereIn('id', $cat_ids)->pluck('name', 'id');
foreach ($data as $k => $v) {
    echo '<a target="_blank" href="/admin/tag/' . $k . '" class="kt-badge kt-badge--bolder kt-badge kt-badge--inline kt-badge--unified-primary"
            style="margin-right: 5px;">' . $v . '</a>';
}