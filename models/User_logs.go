package models

type UserLogs struct {
	UUID string `json:"uuid" gorm:"primaryKey"`

	Name        string `json:"name"`
	Action      string `json:"action"`
	Discription string `json:"description"`
	UserUUID    string `json:"user_uuid"`
	User        User   `json:"user" gorm:"foreignKey:UserUUID;references:UUID"`
	Signiture   string `json:"signature"`
}
