package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	WarehouseUUID string `json:"warehouse_uuid"`
	Warehouse     Warehouse `json:"warehouse" gorm:"foreignKey:WarehouseUUID;references:UUID"`

	Name       string `json:"name" gorm:"unique;not null"`
	Decription string `json:"description"`

	ProductUUID string `json:"product_uuid"`
	Product     Product `json:"product" gorm:"foreignKey:ProductUUID;references:UUID"`
	StockUUID   string `json:"stock_uuid"`
	Stock       Stock `json:"stock" gorm:"foreignKey:StockUUID;references:UUID"`
}