# Generated by Django 5.0.4 on 2024-04-28 06:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('motionbot_backend', '0006_alter_motions_infoslide_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='motions',
            old_name='motion',
            new_name='motionName',
        ),
    ]
