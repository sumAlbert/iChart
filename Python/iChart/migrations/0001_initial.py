# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-18 12:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sheet',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('userid', models.IntegerField()),
                ('type', models.CharField(max_length=20)),
                ('filename', models.CharField(max_length=255)),
                ('sheetname', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('account', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
    ]