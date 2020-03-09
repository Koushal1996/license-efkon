import { Component, OnInit } from '@angular/core';
import { MyProjectDetailService } from 'src/app/Services/my-project-detail.service';
import { ProjectDetailServiceService } from '../project-detail/project-detail-service.service';

@Component({
  selector: 'app-generate-licence',
  templateUrl: './generate-licence.component.html',
  styleUrls: ['./generate-licence.component.scss']
})
export class GenerateLicenceComponent implements OnInit {

  customerName: any;
  projectCode: { id: number; productFamily_id: number; name: string; }[];
  constructor(private myServices: MyProjectDetailService, private customerNAme: ProjectDetailServiceService) { }

  ngOnInit(): void {
    this.projectCode = this.myServices.productCode;
    this.customerName = this.customerNAme.ViewLog;
 }
}
