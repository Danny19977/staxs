package models

import "gorm.io/gorm"

type Province struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	Name        string  `json:"name" gorm:"unique;not null"`
	CountryUUID string  `json:"country_uid" gorm:"not null"`
	Country     Country `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`

	Signature string `json:"signature_uid"`

	Areas []Area `json:"areas" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	Warehouse []Warehouse `json:"warehouse" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	Stocks []Stock `json:"stocks" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	Products []Product `json:"products" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	Users []User `json:"users" gorm:"foreignKey:ProvinceUUID;references:UUID"`
}
