# Generated by Django 4.1 on 2024-01-03 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('thirdapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='topic',
            old_name='top_name',
            new_name='name_top',
        ),
        migrations.AddField(
            model_name='accessrecord',
            name='date',
            field=models.DateField(default=None),
            preserve_default=False,
        ),
    ]
