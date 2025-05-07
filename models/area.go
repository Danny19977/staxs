package models

import "gorm.io/gorm"

type Area struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	Name         string   `json:"name" gorm:"unique;not null"`
	CountryUUID  string   `json:"country_uid" gorm:"not null"`
	Country      Country  `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`
	ProvinceUUID string   `json:"province_uid" gorm:"not null"`
	Province     Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`

	Signature string `json:"signature_uid"`

	Warehouses []Warehouse `json:"warehouses" gorm:"foreignKey:AreaUUID;references:UUID"`
	Stocks    []Stock `json:"stocks" gorm:"foreignKey:AreaUUID;references:UUID"`
	Products  []Product `json:"products" gorm:"foreignKey:AreaUUID;references:UUID"`
}
