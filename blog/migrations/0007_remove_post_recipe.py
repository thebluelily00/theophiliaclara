# Generated by Django 2.2.6 on 2019-12-30 00:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20191229_1826'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='recipe',
        ),
    ]
