package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model

	UUID string `json:"uuid" gorm:"primaryKey"`

	CountryUUID string `json:"country_uuid"`
	Country Country `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`
	ProvinceUUID string `json:"province_uuid"`
	Province Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	AreaUUID string `json:"area_uuid"`
	Area Area `json:"area" gorm:"foreignKey:AreaUUID;references:UUID"`

	Name string `json:"name" gorm:"unique;not null"`
	Description string `json:"description"`
	Price float64 `json:"price"`
	Cost float64 `json:"cost"`

	Signature string `json:"signature_uuid"`

	StockUUID []string `json:"stock_uuid"`


}