import {BenhNhan} from './benh-nhan';

export interface BenhAn {
   id?:number;
   ngayNhapVien?:string;
   ngayRaVien?:string;
   lyDoNhapVien?:string;
   phuongPhapDieuTri?:string;
   bacSiDieuTri?:string;
   benhNhan?:BenhNhan;
}
