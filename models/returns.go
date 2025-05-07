package models

import "gorm.io/gorm"

type Returns struct {
	gorm.Model

	UUID string `json:"uuid" gorm:"primaryKey"`

	ProductUUID string `json:"product_uuid"`
	Product     Product `json:"product" gorm:"foreignKey:ProductUUID;references:UUID"`
	DistributorUUID string `json:"distributor_uuid"`
	Distributor Distributor `json:"distributor" gorm:"foreignKey:DistributorUUID;references:UUID"`
	WarehouseUUID string `json:"warehouse_uuid"`
	Warehouse Warehouse `json:"warehouse" gorm:"foreignKey:WarehouseUUID;references:UUID"`
	StockUUID string `json:"stock_uuid"`
	Stock Stock `json:"stock" gorm:"foreignKey:StockUUID;references:UUID"`

	Sold int `json:"sold"`
	Quantity int `json:"quantity"`
	Reason   string `json:"reason"`

	Signiture string `json:"signature_uid"`


}