package models

import "gorm.io/gorm"

type Warehouse struct {
	gorm.Model

	UUID string `json:"uuid" gorm:"primaryKey"`

	Name    string `json:"name" gorm:"unique;not null"`
	Address string `json:"address"`

	CountryUUID  string   `json:"country_uuid"`
	Country      Country  `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`
	ProvinceUUID string   `json:"province_uuid"`
	Province     Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	AreaUUID     string   `json:"area_uuid"`
	Area         Area     `json:"area" gorm:"foreignKey:AreaUUID;references:UUID"`

	// Head Head `json:"head" gorm:"foreignKey:HeadUUID;references:UUID"`
	HeadsUUID string `json:"head_uuid"`

	Signature string `json:"signature_uid"`

	Distributors []Distributor `json:"distributors" gorm:"foreignKey:WarehouseUUID;references:UUID"`
	Stocks       []Stock       `json:"stocks" gorm:"foreignKey:WarehouseUUID;references:UUID"`
}