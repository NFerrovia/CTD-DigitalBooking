resource "aws_eip" "g1vpc-nat" {
    vpc = true
}

resource "aws_nat_gateway" "g1vpc-nat-gw" {
    allocation_id = aws_eip.g1vpc-nat.id
    subnet_id = aws_subnet.g1vpc-public-1.id
    depends_on = [ aws_internet_gateway.g1vpc-gw ]
    tags = {
    Name = "0621-C5-G1-NG"
    }
}

resource "aws_route_table" "g1vpc-private" {
    vpc_id = aws_vpc.g1vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.g1vpc-nat-gw.id
    }
    tags = {
    Name = "0621-C5-G1-privateRT"
    }
}

resource "aws_route_table_association" "g1vpc-private-1-a" {
    subnet_id = aws_subnet.g1vpc-private-1.id
    route_table_id = aws_route_table.g1vpc-private.id
}