import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { PromotionService } from '../../promotionservice';
@Component({
    selector: 'app-product-vendor',
    templateUrl: './product-vendor.component.html',
    styleUrls: ['./product-vendor.component.css']
})
export class ProductVendorComponent implements OnInit {
    selectedNode: any;
    productVendorInfo: any;
    hierarchy: any;
    valid = true;
    constructor(private router: Router, private promoService: PromotionService) {
        this.productVendorInfo = this.promoService.getPromotionInformation().productvendor;
        console.log('this.promotionTypeInfo', this.productVendorInfo);
        this.hierarchy = [
            {
                'label': 'M&S',
                'data': 'O001',
                'hierarchyLevel': 'Organization',
                'children': [{
                    'label': 'Mens Wear',
                    'data': 'BU001',
                    'hierarchyLevel': 'Business Unit',
                    'children': [{
                        'label': 'Casual Shirts',
                        'data': 'D001',
                        'hierarchyLevel': 'Department',
                        'children': [{
                            'label': 'Checked Shirts',
                            'data': 'C001',
                            'hierarchyLevel': 'Class',
                        },
                        {
                            'label': 'Solid Shirts',
                            'data': 'C002',
                            'hierarchyLevel': 'Class',
                        }]
                    },
                    {
                        'label': 'Casual Trousers',
                        'data': 'D002',
                        'hierarchyLevel': 'Department',
                        'children': [{
                            'label': 'Sports trousers',
                            'data': 'C003',
                            'hierarchyLevel': 'Class',
                        },
                        {
                            'label': 'Solid Trousers',
                            'data': 'C003',
                            'hierarchyLevel': 'Class',
                        }]
                    }]
                },
                {
                    'label': 'Kids Wear',
                    'data': 'BU002',
                    'hierarchyLevel': 'Business Unit',
                    'children': [{
                        'label': 'Kids Tshirt',
                        'hierarchyLevel': 'Department',
                        'data': 'D003'
                    },
                    {
                        'label': 'Kids Shorts',
                        'hierarchyLevel': 'Department',
                        'data': 'D004'
                    }]
                }]
            }
        ];
    }

    ngOnInit(): void {
        // this.nodeSelect({ node: this.productVendorInfo.selectedHierarchy});
        console.log('this.productVendorInfo.selectedHierarchy', this.productVendorInfo.selectedHierarchy);
        this.selectedNode = this.productVendorInfo.selectedHierarchy;
    }

    nodeSelect(ev: any): void {
        console.log('ev', this.selectedNode);
        this.productVendorInfo.selectedHierarchy = this.selectedNode;
        this.valid = true;
    }
    nextPage(): void {
        // this.ticketService.ticketInformation.seatInformation = this.seatInformation;
        console.log('selectedFile', this.productVendorInfo.selectedHierarchy);
        if (Object.keys(this.productVendorInfo.selectedHierarchy).length !== 0) {
            this.promoService.promotionInformation.productvendor = this.productVendorInfo;
            this.router.navigate(['promotion/promoselection']);
            return;
        } else {
            this.valid = false;
        }
    }

    prevPage(): void {
        this.router.navigate(['promotion/summary']);
    }
}
