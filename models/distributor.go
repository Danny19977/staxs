package models

import "gorm.io/gorm"

type Distributor struct {
	gorm.Model
	UUID string `json:"uuid" gorm:"primaryKey"`

	WarehouseUUID string    `json:"warehouse_uuid"`
	Warehouse     Warehouse `json:"warehouse" gorm:"foreignKey:WarehouseUUID;references:UUID"`

	Name    string `json:"name" gorm:"unique;not null"`
	Quntity int    `json:"quantity"`

	StockUUID string `json:"stock_uuid"`
	Stock     Stock  `json:"stock" gorm:"foreignKey:StockUUID;references:UUID"`

	ProductUUID string  `json:"product_uuid"`
	Product     Product `json:"product" gorm:"foreignKey:ProductUUID;references:UUID"`

	Signature string `json:"signature_uuid"`
}
