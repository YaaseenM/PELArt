package handler

import (
	"GoRestAPI/platform/image"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ImageGet(pictures image.Getter) gin.HandlerFunc {
	return func(c *gin.Context) {
		results := pictures.GetAll()
		c.JSON(http.StatusOK, results)
	}

}