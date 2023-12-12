<?php

namespace App\CRMDV\Controllers\Admin;

use App\CRMDV\Models\Bill;
use App\Http\Helpers\CommonHelper;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\CRMDV\Models\Category;
use App\CRMDV\Models\Codes;
use App\CRMDV\Models\Theme;
use App\CRMDV\Models\Tag;
use Validator;
use App\CRMDV\Models\PostTag;
use App\CRMDV\Models\BillProgress;

class CodesController extends CURDBaseController
{

    protected $module = [
        'code' => 'codes',
        'table_name' => 'codes',
        'label' => 'Bảng hàng',
        'modal' => '\App\CRMDV\Models\Codes',
        'list' => [
//            ['name' => 'image', 'type' => 'image', 'label' => 'Ảnh'],
            ['name' => 'id', 'type' => 'text', 'label' => 'No'],
            ['name' => 'address', 'type' => 'text_edit', 'label' => 'Địa chỉ'],
//            ['name' => 'link', 'type' => 'relation', 'object' => 'bill', 'display_field' => 'name_vi', 'label' => 'Dự án'],
//            ['name' => 'multi_cat', 'type' => 'custom', 'td' => 'CRMDV.list.td.multi_cat', 'label' => 'Danh mục'],
            ['name' => 'dien_tich', 'type' => 'text', 'label' => 'Diện tích'],
            ['name' => 'gia_niem_yet', 'type' => 'text', 'label' => 'Giá'],
            ['name' => 'mat_tien', 'type' => 'text', 'label' => 'Mặt tiền'],
            ['name' => 'so_tang', 'type' => 'text', 'label' => 'Số tầng'],
            ['name' => 'luot_xem', 'type' => 'inner', 'label' => 'Lượt xem', 'html' => '11'],
            ['name' => 'created_at', 'type' => 'datetime_vi', 'label' => 'Ngày tạo'],
            ['name' => 'admin_id', 'type' => 'relation', 'label' => 'Người tạo', 'object' => 'admin', 'display_field' => 'name'],
        ],
        'form' => [
            'general_tab' => [
                ['name' => 'loai_hinh', 'type' => 'select', 'options' => [
                    '' => '',
                    'Mua bán' => 'Mua bán',
                    'Cho thuê' => 'Cho thuê',
                ], 'label' => 'Loại hình', 'group_class' => 'col-md-6'],
                ['name' => 'loai_nha_dat', 'type' => 'select', 'options' => [
                    '' => '',
                    'Nhà đất riêng lẻ' => 'Nhà đất riêng lẻ',
                    'Liền kề - biệt thự' => 'Liền kề - biệt thự',
                    'Chung cư' => 'Chung cư',
                ], 'label' => 'Loại nhà đất', 'group_class' => 'col-md-6'],
                ['name' => 'service_id', 'type' => 'select2_model', 'label' => 'Dự án', 'model' => \App\CRMDV\Models\Service::class, 'object' => 'service', 'display_field' => 'name_vi', 'class' => ''],
                ['name' => 'province_id', 'type' => 'select_location', 'label' => 'Chọn địa điểm', 'group_class' => 'col-md-9'],
                ['name' => 'duong', 'type' => 'text', 'class' => '', 'label' => 'Đường', 'group_class' => 'col-md-12'],
                ['name' => 'address', 'type' => 'text', 'class' => 'required', 'label' => 'Địa chỉ', 'group_class' => 'col-md-12'],
                ['name' => 'dien_tich', 'type' => 'text', 'class' => '', 'label' => 'Diện tích', 'group_class' => 'col-md-3'],
                ['name' => 'mat_tien', 'type' => 'text', 'class' => '', 'label' => 'Mặt tiền', 'group_class' => 'col-md-3'],
                ['name' => 'so_tang', 'type' => 'number', 'class' => '', 'label' => 'Số tầng', 'group_class' => 'col-md-3'],

            ],
            'remind_tab' => [
                ['name' => 'image', 'type' => 'file_image', 'label' => 'Ảnh đại diện'],
                ['name' => 'image_extra', 'type' => 'multiple_image_dropzone', 'count' => '6', 'label' => 'Thêm nhiều ảnh khác'],
            ],
            'des_tab' => [
                ['name' => 'gia_niem_yet', 'type' => 'text', 'class' => '', 'label' => 'Giá bán niêm yết', 'group_class' => 'col-md-4'],
                ['name' => 'gia_ha_chao', 'type' => 'text', 'class' => '', 'label' => 'Giá hạ chào', 'group_class' => 'col-md-4'],
                ['name' => 'content', 'type' => 'textarea_editor', 'class' => '', 'label' => 'Nội dung chi tiết'],
//                ['name' => 'content', 'type' => 'textarea_editor', 'class' => '', 'label' => 'Mô tả chi tiết tính năng'],
                ['name' => 'intro', 'type' => 'text', 'label' => 'Họ tên chủ nhà', 'group_class' => 'col-md-6'],
                ['name' => 'sdt_chu_nha', 'type' => 'text', 'label' => 'Số điện thoại chủ nhà', 'group_class' => 'col-md-6'],
                ['name' => 'so_giay_chung_nhan', 'type' => 'text', 'label' => 'Số giấy chứng nhận vào sổ', 'group_class' => 'col-md-6'],
                ['name' => 'seri', 'type' => 'text', 'label' => 'Số seri', 'group_class' => 'col-md-6'],
                ['name' => 'dia_chi_tren_so', 'type' => 'text', 'label' => 'Địa chỉ trên số', 'group_class' => 'col-md-12'],
                ['name' => 'so_do_va_hop_dong_chu_nha', 'type' => 'multiple_image_dropzone', 'count' => '1', 'label' => 'Sơ đồ và hợp đồng chủ nhà'],
                ['name' => 'xac_thuc', 'type' => 'checkbox', 'label' => 'Trạng thái tin xác thực', 'value' => 1, 'group_class' => 'col-md-4'],
//                ['name' => 'trang_thai_2', 'type' => 'checkbox', 'label' => 'Trạng thái tin xác thực', 'value' => 1, 'group_class' => 'col-md-4'],
                ['name' => 'da_ban', 'type' => 'checkbox', 'label' => 'Đã bán', 'value' => 1, 'group_class' => 'col-md-4'],
            ],
        ]
    ];

    protected $quick_search = [
        'label' => 'ID',
        'fields' => 'id, name, link, source, owned'
    ];

    protected $filter = [
        'multi_cat' => [
            'label' => 'Thể loại',
            'type' => 'select2_model',
            'display_field' => 'name',
            'object' => 'category',
            'model' => Category::class,
            'query_type' => 'custom',
        ],
    ];

    public function getIndex(Request $request)
    {
        $data = $this->getDataList($request);

        return view('CRMDV.codes.list')->with($data);
    }

    public function appendWhere($query, $request)
    {
        //  Nếu không có quyền xem toàn bộ dữ liệu thì chỉ được xem các dữ liệu mình tạo
        if (!CommonHelper::has_permission(\Auth::guard('admin')->user()->id, 'view_all_data')) {
            // $query = $query->where('admin_id', \Auth::guard('admin')->user()->id);
        }

        if (!is_null($request->get('multi_cat'))) {
            $query = $query->where('multi_cat', 'like', '%|'.$request->multi_cat.'|%');
        }

        return $query;
    }

    public function add(Request $request)
    {
        try {


            if (!$_POST) {
                $data = $this->getDataAdd($request);
                return view('CRMDV.codes.add')->with($data);
            } else if ($_POST) {
                \DB::beginTransaction();

                $validator = Validator::make($request->all(), [
                    'name' => 'required',
                    'link' => 'required|unique:codes,link',
                ], [
                    'name.required' => 'Bắt buộc phải nhập tên',
                    'link.unique' => 'Web này đã đăng!',
                ]);
                if ($validator->fails()) {
                    return back()->withErrors($validator)->withInput();
                } else {
                    $data = $this->processingValueInFields($request, $this->getAllFormFiled());
                    //  Tùy chỉnh dữ liệu insert

                    $data['admin_id'] = \Auth::guard('admin')->user()->id;


                    if ($request->has('image_extra')) {
                        $data['image_extra'] = implode('|', $request->image_extra);
                    }

                    if ($request->has('so_do_va_hop_dong_chu_nha')) {
                        $data['so_do_va_hop_dong_chu_nha'] = implode('|', $request->so_do_va_hop_dong_chu_nha);
                    }


                    foreach ($data as $k => $v) {
                        $this->model->$k = $v;
                    }

                    if ($this->model->save()) {
                        \DB::commit();

                        CommonHelper::one_time_message('success', 'Tạo mới thành công!');
                    } else {
                        \DB::rollback();
                        CommonHelper::one_time_message('error', 'Lỗi tao mới. Vui lòng load lại trang và thử lại!');
                    }

                    if ($request->ajax()) {
                        return response()->json([
                            'status' => true,
                            'msg' => '',
                            'data' => $this->model
                        ]);
                    }

                    if ($request->return_direct == 'save_continue') {
                        return redirect('admin/' . $this->module['code'] . '/edit/' . $this->model->id);
                    } elseif ($request->return_direct == 'save_create') {
                        return redirect('admin/' . $this->module['code'] . '/add');
                    }

                    return redirect('admin/' . $this->module['code']);
                }
            }
        } catch (\Exception $ex) {
            \DB::rollback();
            CommonHelper::one_time_message('error', $ex->getMessage());
            return redirect()->back()->withInput();
        }
    }

    //  Xử lý tag
    public function xulyTag($post_id, $data)
    {
        $id_updated = [];
        $tags = json_decode($data['tags']);

        if (is_array($tags) && !empty($tags)) {
            foreach ($tags as $tag_name) {
                $tag_name = $tag_name->value;
                //  Tạo tag nếu chưa có
                $tag = Tag::where('name', $tag_name)->first();
                if (!is_object($tag)) {
                    $tag = new Tag();
                    $tag->name = $tag_name;
                    $tag->slug = str_slug($tag_name, '-');
                    $tag->type = 'code';
                    $tag->save();
                }


                $post_tag = PostTag::updateOrCreate([
                    'post_id' => $post_id,
                    'tag_id' => $tag->id,
                ], [
                    'multi_cat' => $data['multi_cat']
                ]);
                $id_updated[] = $post_tag->id;
            }
        }
        //  Xóa tag thừa
        PostTag::where('post_id', $post_id)->whereNotIn('id', $id_updated)->delete();

        return true;
    }

    public function update(Request $request)
    {
        try {


            $item = $this->model->find($request->id);

            if (!is_object($item)) abort(404);
            if (!$_POST) {
                $data = $this->getDataUpdate($request, $item);
                return view('CRMDV.codes.edit')->with($data);
            } else if ($_POST) {
                \DB::beginTransaction();

                $validator = Validator::make($request->all(), [
//                    'name' => 'required',
//                    'link' => 'required',
                ], [
//                    'name.required' => 'Bắt buộc phải nhập tên gói',
//                    'link.unique' => 'Web này đã đăng!',
                ]);

                if ($validator->fails()) {
                    return back()->withErrors($validator)->withInput();
                } else {
                    $data = $this->processingValueInFields($request, $this->getAllFormFiled());

                    //  Tùy chỉnh dữ liệu insert
                    if ($request->has('image_extra')) {
                        $data['image_extra'] = implode('|', $request->image_extra);
                    }
                    if ($request->has('so_do_va_hop_dong_chu_nha')) {
                        $data['so_do_va_hop_dong_chu_nha'] = implode('|', $request->so_do_va_hop_dong_chu_nha);
                    }


                    foreach ($data as $k => $v) {
                        $item->$k = $v;
                    }
                    if ($item->save()) {
                        \DB::commit();
                        CommonHelper::one_time_message('success', 'Cập nhật thành công!');
                    } else {
                        \DB::rollback();
                        CommonHelper::one_time_message('error', 'Lỗi cập nhật. Vui lòng load lại trang và thử lại!');
                    }
                    if ($request->ajax()) {
                        return response()->json([
                            'status' => true,
                            'msg' => '',
                            'data' => $item
                        ]);
                    }

                    if ($request->return_direct == 'save_continue') {
                        return redirect('admin/' . $this->module['code'] . '/edit/' . $item->id);
                    } elseif ($request->return_direct == 'save_create') {
                        return redirect('admin/' . $this->module['code'] . '/add');
                    }

                    return redirect('admin/' . $this->module['code']);
                }
            }
        } catch (\Exception $ex) {
            \DB::rollback();
//            CommonHelper::one_time_message('error', 'Lỗi hệ thống! Vui lòng liên hệ kỹ thuật viên.');
            CommonHelper::one_time_message('error', $ex->getMessage());
            return redirect()->back()->withInput();
        }
    }

    public function getPublish(Request $request)
    {
        try {

            $item = $this->model->find($request->id);

            if (!is_object($item))
                return response()->json([
                    'status' => false,
                    'msg' => 'Không tìm thấy bản ghi'
                ]);

            if ($item->{$request->column} == 0)
                $item->{$request->column} = 1;
            else
                $item->{$request->column} = 0;

            $item->save();

            return response()->json([
                'status' => true,
                'published' => $item->{$request->column} == 1 ? true : false
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'published' => null,
                'msg' => 'Lỗi hệ thống! Vui lòng liên hệ kỹ thuật viên.'
            ]);
        }
    }

    public function delete(Request $request)
    {
        try {

            $item = $this->model->find($request->id);

            $item->delete();

            CommonHelper::one_time_message('success', 'Xóa thành công!');
            return redirect('admin/' . $this->module['code']);
        } catch (\Exception $ex) {
            CommonHelper::one_time_message('error', 'Lỗi hệ thống! Vui lòng liên hệ kỹ thuật viên.');
            return back();
        }
    }

    public function multiDelete(Request $request)
    {
        try {

            $ids = $request->ids;
            if (is_array($ids)) {
                $this->model->whereIn('id', $ids)->delete();
            }
            CommonHelper::one_time_message('success', 'Xóa thành công!');
            return response()->json([
                'status' => true,
                'msg' => ''
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'msg' => 'Lỗi hệ thống! Vui lòng liên hệ kỹ thuật viên'
            ]);
        }
    }

}
