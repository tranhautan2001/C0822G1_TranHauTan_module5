import {Component, OnInit} from '@angular/core';
import {BenhNhan} from '../../model/benh-nhan';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhAn} from '../../model/benh-an';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  benhNhanList: BenhNhan [] = [];

  benhAnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    ngayNhapVien: new FormControl("",[Validators.required]),
    ngayRaVien: new FormControl("",[Validators.required]),
    lyDoNhapVien: new FormControl("",[Validators.required]),
    phuongPhapDieuTri: new FormControl("",[Validators.required]),
    bacSiDieuTri: new FormControl("",[Validators.required]),
    BenhNhan: new FormControl("",[Validators.required]),
  });

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      if (id != null) {
        this.getAll(id);
      }
    });

  }

  ngOnInit() {
    this.benhNhanService.getAllBenhNhan().subscribe(data => {
      this.benhNhanList = data;
    });
  }

  getAll(id: number) {
    this.benhAnService.findById(id).subscribe(data => {
      this.benhAnForm.patchValue(data);
    });
  }

  updateBenhAn() {
    if (this.benhAnForm.valid){
    const benhAn = this.benhAnForm.value;
    this.benhAnService.update(benhAn.id,benhAn).subscribe(data => {
      // alert('chinh sửa thành công');
      this.toastr.success("chinh sửa thành công", "Chỉnh sửa")
      this.router.navigateByUrl('');
    });
  }
  }

  compareWith(object1: BenhAn, object2 : BenhAn): boolean {
    return object2&& object1? object1.id === object2.id: object2===object1
  }
}
