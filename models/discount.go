package models

import "gorm.io/gorm"

type Discount struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	Amount	 float64 `json:"amount"`

	StockUUID string `json:"stock_uuid" gorm:"not null"`
	Stock     Stock  `json:"stock" gorm:"foreignKey:StockUUID;references:UUID"`
	Distributor Distributor `json:"distributor" gorm:"foreignKey:DiscountUUID;references:UUID"`
	Signature string `json:"signature_uuid"`


}