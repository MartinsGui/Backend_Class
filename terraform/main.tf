resource "aws_s3_bucket" "backend_bucket" {
  bucket = "backend-class-martinsgui"

  tags = {
    Name = "BackendClassBucket"
  }
}