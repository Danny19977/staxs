package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	Name       string `json:"name" gorm:"unique;not null"`
	Decription string `json:"description"`

	ProductUUID string `json:"product_uuid"`
}