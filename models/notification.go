package models

import (
	"gorm.io/gorm"
)

type Notification struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`
}
