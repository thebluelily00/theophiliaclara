# Generated by Django 2.2.6 on 2020-04-05 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_auto_20200318_0050'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='css',
            field=models.TextField(default='*{}'),
            preserve_default=False,
        ),
    ]