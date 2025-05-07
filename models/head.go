package models

import "gorm.io/gorm"

type Head struct {
	gorm.Model

	UUID string `json:"uuid" gorm:"primaryKey"`

	ProvinceUUID string   `json:"province_uuid"`
	Province     Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	AreaUUID     string   `json:"area_uuid"`
	Area         Area     `json:"area" gorm:"foreignKey:AreaUUID;references:UUID"`

	WarehouseUUID string    `json:"warehouse_uuid"`
	Warehouse     Warehouse `json:"warehouse" gorm:"foreignKey:WarehouseUUID;references:UUID"`

	UserUUID string `json:"user_uuid"`
	User     User   `json:"user" gorm:"foreignKey:UserUUID;references:UUID"`

	Signature string `json:"signature_uuid"`

	Distributors []Distributor `json:"distributors" gorm:"foreignKey:HeadUUID;references:UUID"`
}