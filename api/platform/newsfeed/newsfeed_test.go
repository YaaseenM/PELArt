package newsfeed

import "testing"

func TestAdd(t *testing.T) {
	feed := New()
	feed.Add(Item{"user@example.com", "password", "John Doe", []string{"image1.jpg", "image2.jpg"}})
	if len(feed.Items) != 1 {
		t.Errorf("Item was not added")
	}
}

func TestGetAll(t *testing.T) {
	feed := New()
	feed.Add(Item{"user@example.com", "password", "John Doe", []string{"image1.jpg", "image2.jpg"}})
	results := feed.GetAll()
	if len(results) != 1 {
		t.Errorf("Item was not added")
	}
	if len(results[0].ImageList) != 2 {
		t.Errorf("ImageList was not added")
	}
}

func TestPatch(t *testing.T) {
    feed := New()
    feed.Add(Item{"YUH", "Hello World", "John Doe", []string{}})

    err := feed.Patch("John Doe", []string{"image1.png", "image2.png"})
    if err != nil {
        t.Errorf("Error patching newsfeed: %v", err)
    }

    items := feed.GetAll()
    if len(items) != 1 {
        t.Errorf("Expected number of items to be %v but got %v", 1, len(items))
    }

    item := items[0]
    if item.FullName != "John Doe" {
        t.Errorf("Expected full name to be %v but got %v", "John Doe", item.FullName)
    }

    if len(item.ImageList) != 2 {
        t.Errorf("Expected image list length to be %v but got %v", 2, len(item.ImageList))
    }

    if item.ImageList[0] != "image1.png" {
        t.Errorf("Expected first image to be %v but got %v", "image1.png", item.ImageList[0])
    }

    if item.ImageList[1] != "image2.png" {
        t.Errorf("Expected second image to be %v but got %v", "image2.png", item.ImageList[1])
    }
}