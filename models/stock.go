package models

import "gorm.io/gorm"

type Stock struct {
	gorm.Model

	UUID string `json:"uuid" gorm:"primaryKey"`

	CountryUUID string `json:"country_uuid"`
	Country Country `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`
	ProvinceUUID string `json:"province_uuid"`
	Province Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	AreaUUID string `json:"area_uuid"`
	Area Area `json:"area" gorm:"foreignKey:AreaUUID;references:UUID"`

	Quantity int `json:"quantity"`
	ProductUUID string `json:"product_uuid"`
	Product Product `json:"product" gorm:"foreignKey:ProductUUID;references:UUID"`
	WarehouseUUID string `json:"warehouse_uuid"`
	Warehouse Warehouse `json:"warehouse" gorm:"foreignKey:WarehouseUUID;references:UUID"`

	Signature string `json:"signature_uuid"`

	Returns []Return `json:"returns" gorm:"foreignKey:StockUUID;references:UUID"`
	Discounts []Discount `json:"discounts" gorm:"foreignKey:StockUUID;references:UUID"`
	Category []Category `json:"category" gorm:"foreignKey:StockUUID;references:UUID"`
	Distributor []Distributor `json:"distributor" gorm:"foreignKey:StockUUID;references:UUID"`
}