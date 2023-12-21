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
            ['name' => 'address', 'type' => 'custom', 'td' => 'CRMDV.codes.list.td.ten_bang_hang', 'label' => 'Địa chỉ'],
//            ['name' => 'link', 'type' => 'relation', 'object' => 'bill', 'display_field' => 'name_vi', 'label' => 'Dự án'],
//            ['name' => 'multi_cat', 'type' => 'custom', 'td' => 'CRMDV.list.td.multi_cat', 'label' => 'Danh mục'],
            ['name' => 'dien_tich', 'type' => 'text', 'label' => 'Diện tích'],
            ['name' => 'gia_niem_yet', 'type' => 'price_vi', 'label' => 'Giá'],
            ['name' => 'so_phong_ngu', 'type' => 'number', 'label' => 'Số phòng ngủ'],
            ['name' => 'phi_moi_gioi', 'type' => 'number', 'label' => 'Phí môi giới'],
            ['name' => 'luot_xem', 'type' => 'number', 'label' => 'Lượt xem',],
            ['name' => 'created_at', 'type' => 'datetime_vi', 'label' => 'Ngày tạo'],
            ['name' => 'admin_id', 'type' => 'relation', 'label' => 'Người tạo', 'object' => 'admin', 'display_field' => 'name'],
            ['name' => 'hanh_dong' , 'type' => 'custom', 'td' => 'CRMDV.codes.list.td.hanh_dong', 'label' => 'Hành động'],
        ],
        'form' => [
            'general_tab' => [
                ['name' => 'loai_hinh','class' => 'required', 'type' => 'select', 'options' => [
                    '' => '',
                    'Mua bán' => 'Mua bán',
                    'Cho thuê' => 'Cho thuê',
                ], 'label' => 'Loại hình', 'group_class' => 'col-md-6'],
                ['name' => 'loai_nha_dat','class' => 'required', 'type' => 'select', 'options' => [
                    '' => '',
                    'Nhà đất riêng lẻ' => 'Nhà đất riêng lẻ',
                    'Liền kề - biệt thự' => 'Liền kề - biệt thự',
                    'Chung cư' => 'Chung cư',
                ], 'label' => 'Loại nhà đất', 'group_class' => 'col-md-6'],
                ['name' => 'service_id', 'type' => 'select2_model', 'label' => 'Dự án', 'model' => \App\CRMDV\Models\Service::class, 'object' => 'service', 'display_field' => 'name_vi', 'group_class' => 'col-md-6'],
                ['name' => 'project_type_id', 'type' => 'select2_model', 'label' => 'Loại dự án', 'model' => \App\CRMDV\Models\Project_type::class,'where' => 'type="project"', 'object' => 'project_type', 'display_field' => 'name', 'group_class' => 'col-md-6'],
                ['name' => 'province_id', 'seleted' => '2', 'type' => 'select_location', 'class' => 'required', 'label' => 'Chọn địa điểm', 'group_class' => 'col-md-9'],
                ['name' => 'duong', 'type' => 'text', 'class' => '', 'label' => 'Đường', 'class' => 'required', 'group_class' => 'col-md-12'],
                ['name' => 'address', 'type' => 'text', 'class' => 'required', 'label' => 'Địa chỉ', 'group_class' => 'col-md-12'],
                ['name' => 'dien_tich', 'type' => 'text', 'class' => '', 'label' => 'Diện tích sổ', 'group_class' => 'col-md-3'],
                ['name' => 'mat_tien', 'type' => 'text', 'class' => '', 'label' => 'Mặt tiền', 'group_class' => 'col-md-3'],
                ['name' => 'so_tang', 'type' => 'number', 'class' => '', 'label' => 'Số tầng', 'group_class' => 'col-md-3'],
//                ['name' => 'phi_moi_gioi', 'type' => 'number', 'label' => 'Phí môi giới' , 'group_class' => 'col-md-3'],
//                ['name' => 'toa', 'type' => 'number', 'label' => 'Tòa' , 'group_class' => 'col-md-3'],
//                ['name' => 'tang', 'type' => 'number', 'label' => 'Tầng' , 'group_class' => 'col-md-3'],
//                ['name' => 'khoang_tang', 'type' => 'number', 'label' => 'Khoảng tầng' , 'group_class' => 'col-md-3'],
                ['name' => 'khoang_tang','class' => '', 'type' => 'select', 'options' => [
                    '' => '',
                    'Tầng thấp' => 'Tầng thấp',
                    'Tầng trung' => 'Tầng trung',
                    'Tầng cao' => 'Tầng cao',
                ], 'label' => 'Loại hình', 'group_class' => 'col-md-3'],
                ['name' => 'so_phong_ngu' , 'type'=>'number' ,'label'=> 'Số phòng ngủ' , 'group_class'=>'col-md-3']
//                ['name' => 'link', 'type' => 'text', 'class' => '', 'label' => 'Đường', 'group_class' => 'col-md-12'],
            ],

            'remind_tab' => [
                ['name' => 'image', 'type' => 'file_image', 'label' => 'Ảnh đại diện'],
                ['name' => 'image_extra', 'type' => 'multiple_image_dropzone', 'count' => '6', 'label' => 'Thêm nhiều ảnh khác'],
            ],
            'des_tab' => [
                ['name' => 'gia_niem_yet', 'type' => 'text', 'class' => 'required', 'label' => 'Giá bán', 'group_class' => 'col-md-4'],
                ['name' => 'phi_moi_gioi', 'type' => 'text', 'class' => '', 'label' => 'Phí môi giới', 'group_class' => 'col-md-4'],
                ['name' => 'content', 'type' => 'textarea_editor', 'class' => '', 'label' => 'Nội dung chi tiết'],
//                ['name' => 'content', 'type' => 'textarea_editor', 'class' => '', 'label' => 'Mô tả chi tiết tính năng'],
                ['name' => 'intro', 'type' => 'text', 'label' => 'Họ tên chủ nhà','class' => 'required', 'group_class' => 'col-md-6'],
                ['name' => 'sdt_chu_nha', 'type' => 'text', 'label' => 'Số điện thoại chủ nhà', 'class' => 'required','group_class' => 'col-md-6'],
                ['name' => 'so_giay_chung_nhan', 'type' => 'text', 'label' => 'Số seri sổ (tuỳ chọn)', 'group_class' => 'col-md-6'],
                ['name' => 'seri', 'type' => 'text', 'label' => 'Số hợp đồng mua bán (tùy chọn)', 'group_class' => 'col-md-6'],
                ['name' => 'dia_chi_tren_so', 'type' => 'text', 'label' => 'Địa chỉ trên số', 'group_class' => 'col-md-12'],
                ['name' => 'so_do_va_hop_dong_chu_nha', 'type' => 'multiple_image_dropzone', 'count' => '1', 'label' => 'Sổ đỏ và hợp đồng ký gửi với chủ nhà'],
                ['name' => 'xac_thuc', 'type' => 'checkbox', 'label' => 'Trạng thái tin xác thực', 'value' => 1, 'group_class' => 'col-md-4'],
//                ['name' => 'trang_thai_2', 'type' => 'checkbox', 'label' => 'Trạng thái tin xác thực', 'value' => 1, 'group_class' => 'col-md-4'],
//                ['name' => 'da_ban', 'type' => 'checkbox', 'label' => 'Đã bán', 'value' => 1, 'group_class' => 'col-md-4'],
                ['name' => 'status','class' => '', 'type' => 'select', 'options' => [
                    '' => '',
                    'Đã bán' => 'Đã bán',
                    'Chưa bán' => 'Chưa bán',
                    'Tạm dừng' => 'Tạm dừng',
                ], 'label' => 'Trạng thái', 'group_class' => 'col-md-4'],
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
        'project_type_id' => [
            'label' => 'Loại dự án',
            'type' => 'select2_model',
            'model' => \App\CRMDV\Models\Project_type::class,
            'display_field' => 'name',
            'where' => 'type="project"',
            'orderByRaw' => 'order_no desc',
            'query_type' => 'like',
        ],
        'service_id' => [
            'label' => 'Dự án',
            'type' => 'select2_model',
            'model' => \App\CRMDV\Models\Service::class,
            'display_field' => 'name_vi',
            'orderByRaw' => 'order_no desc',
            'query_type' => 'like',
        ],
        'dien_tich' => [
            'label' => 'Diện tích',
            'type' => 'select2_model',
            'model' => \App\CRMDV\Models\Codes::class,
            'display_field' => 'dien_tich',
//            'where' => 'type="project"',
            'orderByRaw' => 'order_no desc',

            'query_type' => 'like',
        ],
        'dien_tich' => [
            'label' => 'Diện tích',
            'type' => 'select',
            'query_type' => '=',
            'options' => [
                '' => '',
                1 => 'Dưới 30m2',
                2 => '30m2 - 50m2',
                3 => '50m2 - 80m2',
                4 => '80m2 - 100m2',
                5 => '100m2 - 150m2',
                6 => '150m2 - 200m2',
                7 => '200m2 - 250m2',
                8 => 'trên 250m2',
            ],
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
            if (CommonHelper::has_permission(\Auth::guard('admin')->user()->id, 'truong_phong')) {

                //  lấy id các thành viên trong phòng mình
                $admin_ids = Admin::select('id')->where('phong_ban_id', \Auth::guard('admin')->user()->phong_ban_id)->pluck('id')->toArray();

                $query = $query->where(function ($query) use ($admin_ids) {
                    foreach ($admin_ids as $admin_id) {
                        $query->orWhere('admin_id', $admin_id); //   xem duoc của thành viên trong phòng mình
                    }
                });
            } else {
                $query = $query->where('admin_id', \Auth::guard('admin')->user()->id);
            }
        }

        if (!is_null($request->get('multi_cat'))) {
            $query = $query->where('multi_cat', 'like', '%|'.$request->multi_cat.'|%');
        }

   if (strpos($request->url(), '/da-ban') !== false) {
//  nếu vào trang đã bán thì truy vấn trạng thái đã bán
            $query = $query->where(function ($query) {
                $query->orWhereIn('status', ['Đã bán']);
//                $query->orWhereRaw('status is NULL');
            });

        } elseif (strpos($request->url(), '/tam-dung') !== false) {

            //  Vào quan tâm mới
            $query = $query->where(function ($query) {
                $query->orWhereIn('status', ['Tạm dừng']);
//                $query->orWhereRaw('status is NULL');
            });
        }elseif (strpos($request->url(), '/tat-ca') !== false) {

        }elseif (strpos($request->url(), '/') !== false) {

            //  Vào quan tâm mới
            $query = $query->where(function ($query) {
                $query->orWhereIn('status', ['Chưa bán']);
            });
        } else {


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
//                    'name' => 'required',
//                    'link' => 'required|unique:codes,link',
                ], [
//                    'name.required' => 'Bắt buộc phải nhập tên',
//                    'link.unique' => 'Web này đã đăng!',
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
    public function ajaxGetInfo($id)
    {
        $data = $this->model->find($id);
        if (!is_object($data)) abort(404);
        $service = $data->service->name_vi;
        // tăng số lượt xem thêm 1
        $data->luot_xem += 1;
        $data->save();
        $imagePath = asset('/filemanager/userfiles/'.$data->image);
        $imagePaths = explode('|', $data->image_extra);
        $fullPaths = array_map(function ($path) {
            return asset('/filemanager/userfiles/' . $path);
        }, $imagePaths);

        return response()->json([
            'status' => true,
            'data' => $data,
            'service' => $service,
            'imagePath' => $imagePath,
            'imagePaths' => $fullPaths
        ]);

    }

}
