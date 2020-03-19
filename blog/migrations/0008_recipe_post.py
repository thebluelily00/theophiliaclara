# Generated by Django 2.2.6 on 2019-12-30 00:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_remove_post_recipe'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='post',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to='blog.Post'),
            preserve_default=False,
        ),
    ]