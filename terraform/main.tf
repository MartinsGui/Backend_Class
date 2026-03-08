provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "backend_sg" {

  name = "backend-devops-sg"

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "backend" {

  ami = "ami-0b6c6ebed2801a5cb"
  instance_type = "t2.micro"

  key_name = "devops-key"

  vpc_security_group_ids = [
    aws_security_group.backend_sg.id
  ]

  user_data = file("../scripts/setup.sh")

  tags = {
    Name = "Backend_DevOps"
  }
}