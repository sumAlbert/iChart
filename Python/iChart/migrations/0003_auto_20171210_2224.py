# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-10 14:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iChart', '0002_sheet_column_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sheet',
            name='column_types',
            field=models.TextField(default='{}', max_length=65535),
        ),
    ]
