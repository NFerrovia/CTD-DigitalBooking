data "template_file" "scriptWeb" {
    template = "${file("${path.module}/scripts/initWeb.sh")}"
}

data "template_file" "scriptApp" {
    template = "${file("${path.module}/scripts/initApp.sh")}"
}

data "aws_availability_zones" "available" {}

data "aws_ami" "ubuntu" {
    most_recent = true
    owners = ["099720109477"]
    filter {
        name = "name"
        values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
    }
}

resource "aws_key_pair" "mykey" {
    key_name = var.KEY_NAME
    public_key = file(var.PATH_TO_PUBLIC_KEY)
}

resource "aws_instance" "instanceWeb" {
    ami = data.aws_ami.ubuntu.id
    instance_type = "t2.micro"
    availability_zone = data.aws_availability_zones.available.names[0]
    key_name = aws_key_pair.mykey.key_name
    vpc_security_group_ids = [ aws_security_group.validate-g1vpc-ssh.id, aws_security_group.validate-g1vpc-http.id ]
    subnet_id = aws_subnet.g1vpc-public-1.id
    depends_on = [aws_s3_bucket.g1bucket]
    tags = {
        Name = "0621-C5-G1-instanceWeb"
    }

    user_data = "${data.template_file.scriptWeb.rendered}"

    connection {
        host = coalesce(self.public_ip, self.private_ip)
        type = "ssh"
        user = var.INSTANCE_USERNAME
        private_key = file(var.PATH_TO_PRIVATE_KEY)
    }
}

resource "aws_instance" "instanceApp" {
    ami = data.aws_ami.ubuntu.id
    instance_type = "t2.micro"
    availability_zone = data.aws_availability_zones.available.names[0]
    key_name = aws_key_pair.mykey.key_name
    vpc_security_group_ids = [ aws_security_group.validate-g1vpc-ssh.id ]
    subnet_id = aws_subnet.g1vpc-private-1.id
    tags = {
        Name = "0621-C5-G1-instanceApp"
    }

    user_data = "${data.template_file.scriptApp.rendered}"
    
}