resource "aws_security_group" "backend_sg" {
  name = "backend-devops-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "backend" {

  ami           = "ami-0fc5d935ebf8bc3bc"
  instance_type = "t2.micro"

  key_name = "devops-key"

  security_groups = [
    aws_security_group.backend_sg.name
  ]

  user_data = file("setup.sh")

  tags = {
    Name = "Backend_DevOps"
  }
}