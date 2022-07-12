resource "aws_s3_bucket" "g1bucket" {

  bucket = "0621-c5-g1-bucket01"
  force_destroy = true


  tags   = {
    Name = "g1bucket-01"
    StackId = "g1bucket"
  }
}

resource "aws_s3_bucket_acl" "g1bucket_bucket_acl" {
  bucket = aws_s3_bucket.g1bucket.id
  acl    = "private"
}