# Generated by Django 2.2.6 on 2019-12-30 01:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_recipe_post'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='author',
        ),
    ]