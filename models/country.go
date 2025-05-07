package models

import (
	"gorm.io/gorm"
)

type Country struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	Name string `json:"name" gorm:"unique;not null"`

	UserUUID string `json:"user_uuid" gorm:"not null"`

	Signature string `json:"signature_uuid"`

	User      []User     `json:"user" gorm:"foreignKey:CountryUUID;references:UUID"`
	Provinces []Province `json:"provinces" gorm:"foreignKey:CountryUUID;references:UUID"`
	Areas     []Area     `json:"areas" gorm:"foreignKey:CountryUUID;references:UUID"`
	Stocks    []Stock    `json:"stocks" gorm:"foreignKey:CountryUUID;references:UUID"`
	Products  []Product  `json:"products" gorm:"foreignKey:CountryUUID;references:UUID"`
}
