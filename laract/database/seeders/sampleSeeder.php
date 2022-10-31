<?php

namespace Database\Seeders;

use App\Models\Sample;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class sampleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sample::create([
            'name' => '田中くん',
            'age' => 12,
            'job' => '勇者',
        ]);

        Sample::create([
            'name' => '中山くん',
            'age' => 18,
            'job' => '戦士',
        ]);

        Sample::create([
            'name' => '神宮くん',
            'age' => 26,
            'job' => '若者',
        ]);

        Sample::create([
            'name' => '神谷くん',
            'age' => 22,
            'job' => '登山家',
        ]);

        Sample::create([
            'name' => '中西くん',
            'age' => 24,
            'job' => '放浪者',
        ]);
    }
}
