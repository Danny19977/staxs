package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model

	UUID string `gorm:"not null;unique" json:"uuid"`

	FullName        string `json:"full_name"`
	Email           string `json:"email"`
	Phone           string `json:"phone"`
	Title           string `json:"title"`
	Password        string `json:"password"`
	ConformPassword string `json:"confirm_password"`
	Role            string `json:"role"`
	Permissions     string `json:"permissions"`
	Image           string `json:"profile_image"`
	Status          string `json:"status"`

	CountryUUID  string   `json:"country_uid"`
	Country      Country  `json:"country" gorm:"foreignKey:CountryUUID;references:UUID"`
	ProvinceUUID string   `json:"province_uid"`
	Province     Province `json:"province" gorm:"foreignKey:ProvinceUUID;references:UUID"`
	AreaUUID     string   `json:"area_uid"`
	Area         Area     `json:"area" gorm:"foreignKey:AreaUUID;references:UUID"`

	Signature string `json:"signature_uid"`
}
