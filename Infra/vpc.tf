resource "aws_vpc" "g1vpc" {
    cidr_block = "10.0.0.0/16"
    instance_tenancy = "default"
    enable_dns_support = true
    enable_dns_hostnames = true
    tags = {
        Name = "0621-C5-G1-vpc"
    }
}

resource "aws_subnet" "g1vpc-public-1" {
    vpc_id = aws_vpc.g1vpc.id
    cidr_block = "10.0.1.0/24"
    map_public_ip_on_launch = true
    availability_zone = "us-east-1a"

    tags = {
        Name = "0621-C5-G1-subnet-public-1"
    }
}

resource "aws_subnet" "g1vpc-public-2" {
    vpc_id = aws_vpc.g1vpc.id
    cidr_block = "10.0.2.0/24"
    map_public_ip_on_launch = true
    availability_zone = "us-east-1b"

    tags = {
        Name = "0621-C5-G1-subnet-public-2"
    }
}

resource "aws_subnet" "g1vpc-private-1" {
    vpc_id = aws_vpc.g1vpc.id
    cidr_block = "10.0.3.0/24"
    map_public_ip_on_launch = false
    availability_zone = "us-east-1a"

    tags = {
        Name = "0621-C5-G1-subnet-private-1"
    }
}

resource "aws_subnet" "g1vpc-private-2" {
    vpc_id = aws_vpc.g1vpc.id
    cidr_block = "10.0.4.0/24"
    map_public_ip_on_launch = false
    availability_zone = "us-east-1b"

    tags = {
        Name = "0621-C5-G1-subnet-private-2"
    }
}

resource "aws_internet_gateway" "g1vpc-gw" {
    vpc_id = aws_vpc.g1vpc.id

    tags = {
        Name = "0621-C5-G1-IG"
    }
}

resource "aws_route_table" "g1vpc-r" {
    vpc_id = aws_vpc.g1vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.g1vpc-gw.id
    }

    tags = {
        Name = "0621-C5-G1-RT"
    }
}

resource "aws_route_table_association" "g1vpc-public-1" {
    subnet_id = aws_subnet.g1vpc-public-1.id
    route_table_id = aws_route_table.g1vpc-r.id
}