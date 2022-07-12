resource "aws_db_subnet_group" "g1database-Master-subnet-group" {
  name         = "c5-g1-0621-database-master-subnet-group"
  subnet_ids   = [aws_subnet.g1vpc-private-1.id, aws_subnet.g1vpc-private-2.id]
  description  = "Subnet for 0621-C5-G1's Database instance"

  tags   = {
    Name =  "0621-c5-g1-master-subnet-group"
  }
}

data "aws_db_snapshot" "g1database-snapshot-latest" {
  db_snapshot_identifier = var.DATABASE-SNAPSHOT-IDENTIFIER
  most_recent            = true
  snapshot_type          = "manual"
}

resource "aws_db_instance" "g1database-Master-instance" {
  instance_class          = var.DATABASE-INSTANCE-CLASS
  username                = var.DATABASE_USERNAME
  password                = var.DATABASE_PASSWORD
  skip_final_snapshot     = true
  availability_zone       = var.DATABASE_AVAILABILITY_ZONE
  identifier              = var.DATABASE-INSTANCE-IDENTIFIER
  snapshot_identifier     = data.aws_db_snapshot.g1database-snapshot-latest.id
  db_subnet_group_name    = aws_db_subnet_group.g1database-Master-subnet-group.name
  multi_az                = var.DATABASE-MAZ-DEPLOYMENT
  vpc_security_group_ids  = [aws_security_group.validate-g1database.id]
  publicly_accessible     = true
}