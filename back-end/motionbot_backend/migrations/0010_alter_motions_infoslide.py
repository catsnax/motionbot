# Generated by Django 5.0.4 on 2024-04-28 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('motionbot_backend', '0009_alter_motions_infoslide'),
    ]

    operations = [
        migrations.AlterField(
            model_name='motions',
            name='infoSlide',
            field=models.CharField(blank=True, default=None, max_length=5000),
        ),
    ]
