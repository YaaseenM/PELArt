package newsfeed

import "fmt"

type Getter interface {
	GetAll() []Item
}

type Adder interface {
	Add(item Item)
}

type Patcher interface {
	Patch(fullName string, images []string) error
}

type Item struct {
	Email string `json:"email"`
	Password string `json:"password"`
	FullName string `json:"fullname"`
	ImageList []string `json:"imagelist"`
}

type Repo struct {
	Items []Item
}

func New() *Repo {
	return &Repo{
		Items: []Item{},
	}
}

func (r *Repo) Add(item Item) {
	r.Items = append(r.Items, item)
}

func (r *Repo) GetAll() []Item {
	return r.Items
}

func (r *Repo) Patch(fullName string, images []string) error {
	for i, item := range r.Items {
		if item.FullName == fullName {
			r.Items[i].ImageList = images
			return nil
		}
	}
	return fmt.Errorf("item not found")
}