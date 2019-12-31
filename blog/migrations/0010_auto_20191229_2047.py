# Generated by Django 2.2.6 on 2019-12-30 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_remove_recipe_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='approved_recipe',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='desc',
            field=models.CharField(max_length=240),
        ),
    ]
